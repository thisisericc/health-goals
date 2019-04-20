<<<<<<< HEAD
"""Activate virtualenv for current interpreter:

Use exec(open(this_file).read(), {'__file__': this_file}).

This can be used when you must use an existing Python interpreter, not the virtualenv bin/python.
"""
import os
import site
import sys
=======
"""By using execfile(this_file, dict(__file__=this_file)) you will
activate this virtualenv environment.

This can be used when you must use an existing Python interpreter, not
the virtualenv bin/python
"""
>>>>>>> 8c7b5ae3324b439f72558eaf32cbb85e3c9548d7

try:
    __file__
except NameError:
<<<<<<< HEAD
    raise AssertionError("You must use exec(open(this_file).read(), {'__file__': this_file}))")

# prepend bin to PATH (this file is inside the bin directory)
bin_dir = os.path.dirname(os.path.abspath(__file__))
os.environ["PATH"] = os.pathsep.join([bin_dir] + os.environ.get("PATH", "").split(os.pathsep))

base = os.path.dirname(bin_dir)

# virtual env is right above bin directory
os.environ["VIRTUAL_ENV"] = base

# add the virtual environments site-package to the host python import mechanism
IS_PYPY = hasattr(sys, "pypy_version_info")
IS_JYTHON = sys.platform.startswith("java")
if IS_JYTHON:
    site_packages = os.path.join(base, "Lib", "site-packages")
elif IS_PYPY:
    site_packages = os.path.join(base, "site-packages")
else:
    IS_WIN = sys.platform == "win32"
    if IS_WIN:
        site_packages = os.path.join(base, "Lib", "site-packages")
    else:
        site_packages = os.path.join(base, "lib", "python{}".format(sys.version[:3]), "site-packages")

prev = set(sys.path)
site.addsitedir(site_packages)
sys.real_prefix = sys.prefix
sys.prefix = base

# Move the added items to the front of the path, in place
new = list(sys.path)
sys.path[:] = [i for i in new if i not in prev] + [i for i in new if i in prev]
=======
    raise AssertionError(
        "You must run this like execfile('path/to/activate_this.py', dict(__file__='path/to/activate_this.py'))"
    )
import os
import site
import sys

old_os_path = os.environ.get("PATH", "")
os.environ["PATH"] = os.path.dirname(os.path.abspath(__file__)) + os.pathsep + old_os_path
base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if sys.platform == "win32":
    site_packages = os.path.join(base, "Lib", "site-packages")
else:
    site_packages = os.path.join(base, "lib", "python%s" % sys.version[:3], "site-packages")
prev_sys_path = list(sys.path)

site.addsitedir(site_packages)
sys.real_prefix = sys.prefix
sys.prefix = base
# Move the added items to the front of the path:
new_sys_path = []
for item in list(sys.path):
    if item not in prev_sys_path:
        new_sys_path.append(item)
        sys.path.remove(item)
sys.path[:0] = new_sys_path
>>>>>>> 8c7b5ae3324b439f72558eaf32cbb85e3c9548d7
